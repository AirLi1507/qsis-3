import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useContext } from "react"
import Dashboard from "../Dashboard/dashboardWrapper.tsx"
import { BaseRoutes, DashboardTabs } from "./routes.tsx"
import { DataProvider, UserContext } from "../Data/context.tsx"
import { getData } from "../Data/getUserData.ts"

function getRoutes() {

  const data = useContext(UserContext)

  var Routes: any = BaseRoutes

  if (localStorage.getItem('login') === 'true') {
    Routes.push({
      path: "/dashboard",
      element: (
        <DataProvider data={getData()}>
          <Dashboard />
        </DataProvider>
      ),
      children:
        data.role !== "Student"
          ?
          DashboardTabs[0].concat(DashboardTabs[1])
          :
          DashboardTabs[0]
    })
  }

  return createBrowserRouter(Routes)
}

function Router() {
  return (
    <RouterProvider router={getRoutes()} />
  )
}

export { Router }
