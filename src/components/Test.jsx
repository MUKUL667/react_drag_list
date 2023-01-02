import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import SortableTree, { changeNodeAtPath } from "react-sortable-tree";
function Test() {
  
  const [treeData,settreeData]=useState([]);
  const list=[{ name: "IT Manager", type: "typeA", starts_with: "Tree" },
  {
    name: "Regional Manager",
    expanded: true,
    type: "typeB",                 
    starts_with: "simple",
    children: [
      { name: "Branch Manager", type: "typeC", starts_with: "Complex" }
    ]
  }]


  useEffect(()=>{
    settreeData(list)
  },[])

  console.log(treeData,"treeData")
  return (
    <div>
     <div style={{ height: 300 }}>
                {/* <SortableTree
           maxDepth={3}
           treeData={treeData}
           onChange={(treeData) => settreeData(treeData)}
           generateNodeProps={(node, path) => { 
            console.log(rowInfo,"rowInfo")
          
          }}
          /> */}

<SortableTree
            treeData={treeData}
            onChange={treeData => settreeData({ treeData })}
            generateNodeProps={({ node, path }) => ({
              title: (
                <form>
                  <input
                    style={{ fontSize: "1.1rem" }}
                    value={node.name}
                    onChange={event => {
                      const name = event.target.value;

                      settreeData(treeData => ({
                        treeData: changeNodeAtPath({
                          treeData: treeData,
                          path,
                          // getNodeKey,
                          newNode: { ...node, name }
                        })
                      }));
                    }}
                  />
                  <input
                    style={{ fontSize: "1.1rem" }}
                    value={node.type}
                    onChange={event => {
                      const type = event.target.value;

                      settreeData(treeData => ({
                        treeData: changeNodeAtPath({
                          treeData: treeData,
                          path,
                          // getNodeKey,
                          newNode: { ...node, type }
                        })
                      }));
                    }}
                  />
                  <input
                    style={{ fontSize: "1.1rem" }}
                    value={node.starts_with}
                    onChange={event => {
                      const starts_with = event.target.value;

                      settreeData(treeData => ({
                        treeData: changeNodeAtPath({
                          treeData: treeData,
                          path,
                          // getNodeKey,
                          newNode: { ...node, starts_with }
                        })
                      }));
                    }}
                  />
                </form>
              )
            })}
          />
        </div>
      </div>
  )
}

export default Test;
//  function test   {
  

    // this.state = {
    //   treeData: [
    //     { name: "IT Manager", type: "typeA", starts_with: "Tree" },
    //     {
    //       name: "Regional Manager",
    //       expanded: true,
    //       type: "typeB",
    //       starts_with: "simple",
    //       children: [
    //         { name: "Branch Manager", type: "typeC", starts_with: "Complex" }
    //       ]
    //     }
    //   ]
    // };


//   render() {
//     const getNodeKey = ({ treeIndex }) => treeIndex;
//     return (
//       <div>
//         <div style={{ height: 300 }}>
//           <SortableTree
//             treeData={this.state.treeData}
//             onChange={treeData => this.setState({ treeData })}
//             generateNodeProps={({ node, path }) => ({
//               title: (
//                 <form>
//                   <input
//                     style={{ fontSize: "1.1rem" }}
//                     value={node.name}
//                     onChange={event => {
//                       const name = event.target.value;

//                       this.setState(state => ({
//                         treeData: changeNodeAtPath({
//                           treeData: state.treeData,
//                           path,
//                           getNodeKey,
//                           newNode: { ...node, name }
//                         })
//                       }));
//                     }}
//                   />
//                   <input
//                     style={{ fontSize: "1.1rem" }}
//                     value={node.type}
//                     onChange={event => {
//                       const type = event.target.value;

//                       this.setState(state => ({
//                         treeData: changeNodeAtPath({
//                           treeData: state.treeData,
//                           path,
//                           getNodeKey,
//                           newNode: { ...node, type }
//                         })
//                       }));
//                     }}
//                   />
//                   <input
//                     style={{ fontSize: "1.1rem" }}
//                     value={node.starts_with}
//                     onChange={event => {
//                       const starts_with = event.target.value;

//                       this.setState(state => ({
//                         treeData: changeNodeAtPath({
//                           treeData: state.treeData,
//                           path,
//                           getNodeKey,
//                           newNode: { ...node, starts_with }
//                         })
//                       }));
//                     }}
//                   />
//                 </form>
//               )
//             })}
//           />
//         </div>
//       </div>
//     );
//   }
// }


// export default test