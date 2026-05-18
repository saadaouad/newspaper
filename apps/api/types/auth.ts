import type { FastifyRequest } from 'fastify';
import type { JWTPayload } from 'jose';

export type JwtPayload = JWTPayload & {
  id: string;
  email: string;
};

export type AuthenticatedRequest = FastifyRequest & {
  user?: JwtPayload;
};

export type RegisterBody = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type LoginBody = {
  email: string;
  password: string;
};
