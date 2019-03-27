import React, { Component, Fragment } from 'react';
import map from 'lodash/map';

const withAppLoader = (elementId, url) => {
  return class AppLoader extends Component {
    state = {
      isLoading: true,
      hasError: false
    };

    componentDidMount() {
      console.log('elementId: ', elementId);
      this.loadApp();
    }

    setLoading = isLoading => this.setState({ isLoading });

    setError = hasError => this.setState({ hasError });

    loadApp = async () => {
      try {
        this.setLoading(true);
        this.setError(false);

        const req = await fetch(url);
        const element = document.getElementById(elementId);
        element.innerHTML = await req.text();

        map(element.querySelectorAll('script[src]'), script => {
          const scriptNew = document.createElement('script');
          scriptNew.setAttribute('src', script.src);
          scriptNew.setAttribute('type', 'text/javascript');
          script.parentNode.removeChild(script);
          element.appendChild(scriptNew);
        });
      } catch (error) {
        console.error(error);
        this.setError(true);
      } finally {
        this.setLoading(false);
      }
    };

    render() {
      const { isLoading, hasError } = this.state;

      return (
        <Fragment>
          <div id={elementId} className="app-loader">
            {hasError && (
              <div
                icon="bug"
                description="Ocorreu um erro ao carregar a aplicação"
                subDescription="Tente novamente"
              />
            )}
          </div>
          {isLoading && <p>Loading...</p>}
        </Fragment>
      );
    }
  };
};

export default withAppLoader;
