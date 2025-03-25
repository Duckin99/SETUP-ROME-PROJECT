import { Prisma, PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export function returnPrismaError(
  error: unknown,
  errorCases: {
    code: string;
    msg: string;
  }[]
): string {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    for (let i = 0; i < errorCases.length; i++) {
      if (error.code == errorCases[i].code) {
        return errorCases[i].msg;
      }
    }
  }
  return "internal server error";
}
