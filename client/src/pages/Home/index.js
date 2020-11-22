import PostForm from '../../components/PostForm';
import withRedirectOnNotAuth from '../../hocs/withRedirectOnNotAuth';

function Home() {
    return (
        <div className="h-full">
            <PostForm />
        </div>
    )
}

Home.displayName = 'HomePage';

export default withRedirectOnNotAuth(Home);