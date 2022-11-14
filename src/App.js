import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import QuizDetails from './components/QuizDetails/QuizDetails';

function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>,
            loader: async () =>{
              return fetch('https://openapi.programming-hero.com/api/quiz')
            }
          },
          {
            path:'/topics',
            element:<Topics></Topics>
          },
          {
            path:'/statistics',
            element:<Statistics></Statistics>
          },
          {
            path:'/quizdetails/:quizId',
            element:<QuizDetails></QuizDetails>,
            loader:async ({params}) => {
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          }
          },
          {
            path:'/blog',
            element:<Blog></Blog>
          }
        ]
      }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
