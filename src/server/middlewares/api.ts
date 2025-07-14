import { FastifyRequest, FastifyReply } from "fastify";

export const healthCheck = (_: FastifyRequest, reply: FastifyReply) => {
  reply.send({ status: "ok" });
};
