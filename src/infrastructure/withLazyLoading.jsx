import React, { Suspense } from 'react';

const withLazyLoading = Lazy => () => (
  <Suspense maxDuration={5000} fallback={<div>Loading...</div>}>
    <Lazy />
  </Suspense>
);

export default withLazyLoading;
