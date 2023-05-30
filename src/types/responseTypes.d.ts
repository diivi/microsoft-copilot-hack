import { Response as ExpressResponse } from "express";

//response interface which extends ExpressResponse and adds userId of type string
interface Response extends ExpressResponse {
  userId: string;
}

export { Response };
