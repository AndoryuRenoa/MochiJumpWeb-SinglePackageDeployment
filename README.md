# MochiJumpWeb-SinglePackageDeployment

This repo holds the code for a single package depolyment.

This is a spring-boot app that serves up an angular front end.

The key to doing this is all maven. If you want to recreate something like this, take a look at the 3 pom.xml files. They are located within the top three folders:

https://github.com/AndoryuRenoa/MochiJumpWeb-SinglePackageDeployment/tree/master/MochiWebDeploy/pom.xml

https://github.com/AndoryuRenoa/MochiJumpWeb-SinglePackageDeployment/tree/master/MochiWebDeploy/MochiJumpFront/pom.xml

https://github.com/AndoryuRenoa/MochiJumpWeb-SinglePackageDeployment/blob/master/MochiWebDeploy/MochiJumpLevelEditor2/pom.xml

With a setup like this you can run: "mvn clean install" just as normal

Take a look at this: https://chariotsolutions.com/blog/post/angular-2-spring-boot-jwt-cors_part2/
