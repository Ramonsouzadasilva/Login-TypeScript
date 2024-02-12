import { AppDataSource } from "../data-source";
import { Setor } from "../entities/Setor";

export const setorRepository = AppDataSource.getRepository(Setor);
