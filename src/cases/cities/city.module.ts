import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { State } from "./entities/state.entity";
import { City } from "./entities/city.entity";
import { StateService } from "./services/state.service";
import { CityService } from "./services/city.service";
import { StateController } from "./controllers/state.controller";
import { CityController } from "./controllers/city.controller";

@Module({
  imports: [TypeOrmModule.forFeature([State, City])],
  providers: [StateService, CityService],
  controllers: [StateController, CityController]
})
export class CityModule {}