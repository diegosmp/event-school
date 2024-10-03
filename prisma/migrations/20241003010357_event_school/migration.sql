-- CreateTable
CREATE TABLE "guests" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "email" TEXT,
    "type" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "employee" TEXT NOT NULL,
    "creatAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "guests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "guests_cpf_key" ON "guests"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "guests_email_key" ON "guests"("email");
