import 'dotenv/config';

import mailQueue from "./lib/queue-config";
import RegistrationMail from "./jobs/RegistrationMail";

mailQueue.process(RegistrationMail.handler);