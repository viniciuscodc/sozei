import express from "express";
import { AppDataSource } from "../database/config";
import { Tag } from "../database/entity/Tag";
import { Tool } from "../database/entity/Tool";

export const routes = express.Router();

const toolRepository = AppDataSource.getRepository(Tool);
const tagRepository = AppDataSource.getRepository(Tag);

routes.get("/", async (req, res) => {
  let tools: Array<Tool> = [];

  if (req.query.tag) {
    tools = await toolRepository
      .createQueryBuilder("q")
      .leftJoin("q.tags", "tag")
      .leftJoinAndSelect("q.tags", "tagSelect")
      .where("tag.name = :name", { name: req.query.tag })
      .getMany();
  } else {
    tools = await toolRepository.find({ relations: ["tags"] });
  }

  if (!tools) {
    return res.status(204);
  }

  const toolsDto = tools.map((tool) => ({
    id: tool.id,
    title: tool.title,
    link: tool.link,
    description: tool.description,
    tags: tool.tags.map((tag) => tag.name),
  }));

  return res.json(toolsDto);
});

routes.post("/", async (req, res) => {
  const existingTags = await tagRepository.find();

  const tags: Array<Tag> = [];

  // Verifica se tag não existe no banco e adiciona caso não existir
  for (const tag of req.body.tags) {
    if (existingTags.filter((exTag) => exTag.name === tag).length === 0) {
      const newTag = new Tag();
      newTag.name = tag;

      await AppDataSource.manager.save(newTag);
      tags.push(newTag);
    } else {
      const foundTag = await tagRepository.findOneBy({ name: tag });

      if (foundTag) {
        tags.push(foundTag);
      }
    }
  }

  const newTool = new Tool();

  newTool.description = req.body.description;
  newTool.link = req.body.link;
  newTool.title = req.body.title;
  newTool.tags = tags;

  const savedTool = await AppDataSource.manager.save(newTool);

  if (!savedTool) {
    return res.status(500).json({
      error: "Erro ao salvar nova ferramenta.",
    });
  }

  const toolDto = {
    id: savedTool.id,
    title: savedTool.title,
    link: savedTool.link,
    description: savedTool.description,
    tags: savedTool.tags.map((tag) => tag.name),
  };

  return res.status(201).json(toolDto);
});
