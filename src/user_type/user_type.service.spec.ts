import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeService } from './user_type.service';

describe('UserTypeService', () => {
  let service: UserTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTypeService],
    }).compile();

    service = module.get<UserTypeService>(UserTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
