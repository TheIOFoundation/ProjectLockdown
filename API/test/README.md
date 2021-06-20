# Description
## Overview
This folder contains all the test of API. The test files will be placed in their folder regard to test type and test objective. 
## Unit test
- Folder: ./UnitTests 
- File name: *.spec.ts

## Integration test 
### Pros
- To be able to assure the correct interation between classes, components, modules. 
### Cons
- The more classes, the more number of interacting ways between them. 
- Require time, resource to write them. 
### Decision
- Only test when neccessary. 
- Apply funcitonal programming to avoid this test type. Functional programming can make sure funcitons, classes have no side-effect, which allows unit test to be sufficient to make sure the codebase working correctly. 

## API testing (e2e)
### Overview
- Testing time? 
- Testing the whole api as a single component. 
### Pros

### Cons

### Decision

# Run testing 
- Unit test all file: `npm run test`
- Unit test single file: **to be added!**


# Notes
## To-do list
- [ ] Researching how to test API response time 
- [ ] Researching what e2e test is and how to test e2e