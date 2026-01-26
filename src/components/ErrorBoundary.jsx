import React from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[400px] flex items-center justify-center p-8 bg-primary/50 backdrop-blur-sm rounded-3xl border border-white/5">
                    <div className="text-center max-w-md">
                        <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center border border-rose-500/20 mx-auto mb-6">
                            <AlertTriangle className="w-8 h-8 text-rose-500" />
                        </div>
                        <h2 className="text-2xl font-display font-bold text-white mb-3">System Short Circuit</h2>
                        <p className="text-slate-400 mb-8">
                            Something went wrong while rendering this component. Our engineers have been notified.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="btn-primary px-8 py-3 flex items-center justify-center gap-2 mx-auto"
                        >
                            <RefreshCcw className="w-4 h-4" />
                            Restart Application
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
