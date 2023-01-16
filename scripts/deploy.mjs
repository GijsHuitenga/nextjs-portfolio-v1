
import dotenv from 'dotenv';
import FtpDeploy from 'ftp-deploy';
import path from 'path';

dotenv.config({ path: './.env' });

async function main() {
  try {
    
    const outDir = path.join(process.cwd(), './out');

    await new FtpDeploy().deploy({

      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      host: process.env.FTP_HOST,
      port: process.env.FTP_PORT,

      localRoot: outDir,
      remoteRoot: '/nextjs/portfolio-v1/',

      include: ['*', '**/*'],
      exclude: [],

      deleteRemote: true,
      forcePasv: true

    });

    console.log('Succesfully deployed site');
    return 0;

  } catch (e) {

    console.error('An error occured during deployment: ', e);
    return 1;

  }
}

main().then(code => process.exit(code));
