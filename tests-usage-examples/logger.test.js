const { logger, log } = require('@testomatio/reporter');

// console messages are added to report by default when import "logger" from reporter
// but to prevent unsused variable warning, you can call next code:
logger;

Feature('Logger @S949969e5');

Scenario('Intercept console logs @Tea8f7d18', async () => {
  console.warn('This is warning message');
});

Scenario('Add own log message @T4a0a7d70', async () => {
  const someObject = {
    name: 'John',
    surname: 'Doe',
    age: 30,
  };
  log('This is log message', someObject);
});
