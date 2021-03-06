import React, {Component} from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {IPost, IPostsState} from "../../_store/reducers/posts.reducer";
import {GetPostsPending} from "../../_store/actions/posts.actions";
import Post from "../post/Post";

type IPostProps = {
    posts: IPost[];
    getPostsPending: Function;
}

class AllPosts extends Component<IPostProps> {

    componentDidMount(): void {
        this.props.getPostsPending();
    }

    render() {
        return (
            <div className="posts">
                {
                    this.props.posts.map((post: IPost) => {
                        return this.props.posts.length ? <Post post={post} key={post.id}/> : <p> No posts :( </p>;
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state: { postsReducer: IPostsState }) => {
    return {
        posts: state.postsReducer.posts
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getPostsPending: () => dispatch(GetPostsPending())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllPosts);
