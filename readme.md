Node js + express + Typescript + mongo db


to initialize a node js application:
first we run the comman "npm init -y" to initialize package.json

second: install expressjs and dotenv:
-> npm i express dotenv

3/ install typescript types
-> npm i -D @types/express @types/node
4/ generate tsconfig file
-> npx tsc --init
5/ add the distination folder for js code in tsconfig.json
{
"compilerOptions": {
...
"outDir": "./dist"
...
}
}
6/ run npm i -D nodemon ts-node