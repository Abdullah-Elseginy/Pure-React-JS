import { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ErrorBoundery extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log('ErrorBoundery cought an error', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          plaeasee there is an eror <Link to="./">click here</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}
