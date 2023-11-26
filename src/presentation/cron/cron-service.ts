import { CronJob } from "cron";

//Especificamos los tipos de datos
type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
    //Esperamos recibir el cronTime y el onTick con sus datos ya especificados
    public static createJob(cronTime: CronTime, onTick: OnTick): CronJob{
        //Creamos un trabajo en base a lo que recibimos
        const job = new CronJob(cronTime, onTick);
        //Iniciamos el trabajo
        job.start();

        return job;
    }
}