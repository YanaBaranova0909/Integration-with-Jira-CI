const testomat = require('@testomatio/reporter');

Feature('Testomat functions @Sd2022e65');

Scenario('Upload file @T86f613c8', async () => {
  testomat.artifact('artifacts/artifact-test-text.txt');
});

Scenario('Upload image @T52004df8', async () => {
  testomat.artifact({
    path: 'artifacts/artifact-test-image.png',
  });
});

Scenario('Add Step to report @Te74d1cff', async () => {
  testomat.step('This is step message');
});

Scenario('Add log message to report @Tab6bf544', async () => {
  testomat.log('This is log message');
  testomat.log`This is log message with template literal`;
});
