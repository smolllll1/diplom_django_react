import React from "react";

class ErrorBoundary extends React.Component {

    state = {
        hasError: false,
    }

    componentDidCatch() {
        return this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            //    return <p>Something went wrong</p>
            return this.props.fallback;
        }
        return this.props.children;
    }
}

export { ErrorBoundary };