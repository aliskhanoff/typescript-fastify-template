import { IndexPage } from './index.jsx'
import { Router } from '@reach/router'

export const Routes = () => {

    return (
        <Router>
            <IndexPage path='/' />
        </Router>
    )

}

export default Routes;