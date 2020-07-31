import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import * as expressHbs from 'express-handlebars'
import * as handleBarsHelpers from 'handlebars-helpers'
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const hbs = expressHbs.create({
    helpers: handleBarsHelpers(),
    extname: '.hbs',
    partialsDir: [
      join(__dirname, '. .', 'views')
    ]
  });

  app.engine('hbs', hbs.engine);
  app.set('view options', { layout: false });
  app.setViewEngine('hbs');
  app.useStaticAssets(join(__dirname, '. .', 'public'));

  await app.listen(3000);
}
bootstrap();
