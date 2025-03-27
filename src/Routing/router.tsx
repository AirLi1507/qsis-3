import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { studentInfoSample } from "../Data/exampleDataSet.ts"
import Dashboard from "../Dashboard/dashboardWrapper.tsx"
import { BaseRoutes, DashboardTabs } from "./route.tsx"

function getRoutes() {

  var Routes: any = BaseRoutes

  if (localStorage.getItem('login') === 'true') {
    DashboardTabs[0].forEach((i) => {
      Routes.push(
        {
          path: `/dashboard/${i.path}`,
          element:
            <Dashboard userInfo={{ data: studentInfoSample }} >
              <i.element data={studentInfoSample} />
            </Dashboard >
        }
      )
    })

    if (studentInfoSample.role !== "Student") {
      DashboardTabs[1].forEach((i) => {
        Routes.push(
          {
            path: `/dashboard/${i.path}`,
            element:
              <Dashboard userInfo={{ data: studentInfoSample }} >
                <i.element data={studentInfoSample} />
              </Dashboard >
          }
        )
      })
    }
  }

  return createBrowserRouter(Routes)
}

const Router = () => {
  return <RouterProvider router={getRoutes()} />
}
export {Router}
