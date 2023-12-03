import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResourceService } from "src/app/core/services/resource.service";
import { Register } from "./models/register";

@Injectable({
  providedIn: 'root',
})
export class RegisterRepository extends ResourceService<Register> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'user';
  }

  override toServerModel(entity: Register): any {
    return {
      email: entity.email,
      password:entity.password
  }
}
}
