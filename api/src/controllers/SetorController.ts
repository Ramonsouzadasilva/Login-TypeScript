import { Request, Response } from "express";
import { setorRepository } from "../repositories/setorRepository";
import { Like } from "typeorm";

export class SetorController {
	async criar(req: Request, res: Response) {
		const { nome, codigo } = req.body;

		try {
			const novoSetor = setorRepository.create({
				nome,
				codigo,
			});

			await setorRepository.save(novoSetor);

			return res.status(201).json(novoSetor);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Erro interno do Servidor" });
		}
	}

	async listar(req: Request, res: Response) {
		try {
			const setores = await setorRepository.find();
			return res.status(200).json(setores);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Erro interno do Servidor" });
		}
	}

	async listarPorId(req: Request, res: Response) {
		const { idSetor } = req.params;

		try {
			const setor = await setorRepository.findOneBy({
				id: Number(idSetor),
			});

			if (!setor) {
				return res.status(404).json({ message: "Setor não encontrado" });
			}

			return res.status(200).json(setor);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Erro interno do Servidor" });
		}
	}

	async atualizar(req: Request, res: Response) {
		const { idSetor } = req.params;
		const { nome, codigo } = req.body;

		try {
			const setor = await setorRepository.findOneBy({
				id: Number(idSetor),
			});

			if (!setor) {
				return res.status(404).json({ message: "Setor não encontrado" });
			}

			setor.nome = nome;
			setor.codigo = codigo;

			await setorRepository.save(setor);

			return res.status(200).json(setor);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Erro interno do Servidor" });
		}
	}

	async remover(req: Request, res: Response) {
		const { idSetor } = req.params;

		try {
			const setor = await setorRepository.findOneBy({
				id: Number(idSetor),
			});

			if (!setor) {
				return res.status(404).json({ message: "Setor não encontrado" });
			}

			await setorRepository.remove(setor);

			return res.status(204).json();
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Erro interno do Servidor" });
		}
	}
}
