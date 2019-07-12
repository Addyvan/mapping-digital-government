import { idArg, queryType, stringArg } from 'nexus';

const Query = queryType({
  definition(t) {

    t.list.field('people', {
      type: 'Person',
      resolve: (parent, args, ctx, info) => {
        return ctx.prisma.persons()
      },
    })

    t.list.field('projects', {
      type: 'Project',
      resolve: (parent, args, ctx) => {
        console.log("PROJECTS QUERY");
        return ctx.prisma.projects()
      },
    })

    t.list.field('tags', {
      type: 'Tag',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.tags()
      },
    })

    /*
    t.list.field('filterProjects', {
      type: 'Post',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.posts({
          where: {
            OR: [
              { title_contains: searchString },
              { content_contains: searchString },
            ],
          },
        })
      },
    })*/

  },
});

export default Query;