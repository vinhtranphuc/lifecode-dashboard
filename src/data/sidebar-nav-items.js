export default function() {
  return [
    {
      title: "Overview",
      to: "/overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Home Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/home-posts",
    },
    {
      title: "Create Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/post/create",
    },
    {
      title: "Post Management",
      htmlBefore: '<i class="material-icons">note</i>',
      to: "/post-management",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile",
    },
    {
      title: "User Management",
      htmlBefore: '<i class="material-icons">person_outline</i>',
      to: "/user-management",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
