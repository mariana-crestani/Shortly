
CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
	"email" TEXT UNIQUE NOT NULL,
	"password" VARCHAR NOT NULL,
    "createdAt" DATE DEFAULT NOW()
);

CREATE TABLE "urls" (
	"id" INTEGER PRIMARY KEY,
    "url" TEXT NOT NULL,
	"shortUrl" TEXT NOT NULL,
	"visitCount" INTEGER,
    "createdAt" DATE DEFAULT NOW()
);


CREATE TABLE "links" (
	"id" INTEGER PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
	"urlId" INTEGER NOT NULL REFERENCES "urls"("id")
);
