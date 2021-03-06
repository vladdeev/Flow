# Flow Project Proposal

## Links

[Heroku](https://flow-project.herokuapp.com/)

[Trello](https://trello.com/b/P8Ea4Lql/flow)

## Minimum Viable Product

Flow is a project management web application inspired by Asana built using Ruby on Rails and React/Redux.

By April 28, 2017, this app will, at a minimum, satisfy the following criteria:


- [ ] New account creation & login, including a demo login.
- [ ] Workspaces
- [ ] Projects
- [ ] Tasks
- [ ] Comments on tasks
- [ ] Hosting on Heroku
- [ ] Production README
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data
- [ ] Sufficient CSS styling


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Workspaces Model, API, and components (2 days)

**Objective:** Workspaces can be created, read, edited and destroyed through
the API.

### Phase 3: Projects (1 day)

**Objective:** Projects belong to Workspaces. Projects can be created, read,
edited and destroyed through the API.

### Phase 4: Tasks (2 days)

**Objective:** Tasks belong to Projects. Tasks can be created, read, edited and destroyed through
the API. Tasks are displayed in lists.

### Phase 5: Comments on tasks (2 days, W2 F 6pm)

**Objective:** Comments belong to Tasks. Comments can be created and read.

### Bonus Features (TBD)
- [ ] User Profiles
- [ ] Calendar
- [ ] Search tasks by title and description
