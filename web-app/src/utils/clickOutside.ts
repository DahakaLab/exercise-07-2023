export const clickOutside = (node: HTMLElement) => {

  const handleClick = (event: MouseEvent) => {
    if (event?.target && node && !node.contains(event.target as any) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click_outside', node as any)
      )
    }
  }

	document.addEventListener('click', handleClick, true);
  
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
	}
}