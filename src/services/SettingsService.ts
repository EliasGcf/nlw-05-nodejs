import { getCustomRepository } from 'typeorm';

import { SettingsRepository } from '../repositories/SettingsRepository';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: SettingsRepository;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {
    const settingsAlreadyExists = await this.settingsRepository.findOne({
      username,
    });

    if (settingsAlreadyExists) {
      throw new Error('Settings already exists.');
    }

    const setting = this.settingsRepository.create({
      chat,
      username,
    });

    await this.settingsRepository.save(setting);

    return setting;
  }
}

export { SettingsService };
