function myUseCallback(callback, dependencies) {
  const prevDepsRef = useRef(dependencies);
  const prevCallbackRef = useRef(callback);
  if (isEqual(dependencies, prevDepsRef.current)) {
    return prevCallbackRef.current;
  }
  const newCallback = myUseCallback(newCallback);
  prevDepsRef.current = dependencies;
  prevCallbackRef.current = newCallback;
  return newCallback;
}
export default myUseCallback