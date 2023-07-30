import { Module } from '@nestjs/common';

import { entities } from "./app.entities";

@Module({
  imports: [...entities],
  controllers: [],
  providers: [],
})
export class AppModule {}
