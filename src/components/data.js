const List = {

  "treeData": [
    { name: "IT Manager", type: "typeA", starts_with: "Tree" },
    {
      name: "Regional Manager",
      expanded: true,
      type: "typeB",
      starts_with: "simple",
      children: [
        { name: "Branch Manager", type: "typeC", starts_with: "Complex" }
      ]
    }
  ],
    // "list": [
    //   {
    //     id: 1,
    //     title: "Read some news",
    //   },
    //   {
    //     id: 2,
    //     title: "Go out for a walk",
    //   },
    //   {
    //     id: 3,
    //     title: "Do some exercise",
    //   },
    //   {
    //     id: 4,
    //     title: "Watch tutorials on YouTube",
    //   },
    //   {
    //     id: 5,
    //     title: "Netflix and chill",
    //   },
    //   {
    //     id: 6,
    //     title: "Read a book",
    //   },
    // ],
    getList: function () {
      return (
        (localStorage.getItem("theList") &&
          JSON.parse(localStorage.getItem("theList"))) ||
        this.list
      );
    },
    saveList: (list) => {
      localStorage.setItem("theList", JSON.stringify(list));
    },
  };
  
  export default List;