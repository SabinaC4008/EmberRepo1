import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
        return ['John Carmack', 'Grace Hopper', 'Bill Gates'];
      }
}
