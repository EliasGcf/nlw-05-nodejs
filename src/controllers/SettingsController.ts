import { Request, Response } from 'express';

import { SettingsService } from '../services/SettingsService';

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settingsService = new SettingsService();

    try {
      const setting = await settingsService.create({ chat, username });

      return res.json(setting);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

export { SettingsController };
