import { RouterProvider } from 'react-router-dom';

import router from '@/router/_index';
import { Provider } from 'react-redux';

// Styles
import '@/assets/scss/_vars.scss';
import '@/assets/scss/reset.scss';
import '@/assets/scss/main.scss';
import '@/assets/scss/form.scss';
import { store } from './redux/store';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
}

export default App;
