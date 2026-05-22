import { Spinner } from '@heroui/react';
import React from 'react';


const loading = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-2">
      <Spinner size="xl" />
      <span className="text-xs text-muted">Loading..</span>
    </div>
    );
};

export default loading;