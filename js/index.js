document.querySelectorAll('.card__content').forEach((e) => {
  makeTruncate(e);
});

document.querySelectorAll('.card__header__name').forEach((e) => {
  makeTruncate(e, 3);
});

function makeTruncate(elem, maxWordCount = 80) {
  const { fullContent, truncatedContent } = truncate(
    elem.dataset.content,
    maxWordCount
  );

  if (!truncatedContent) {
    elem.textContent = fullContent;
    return;
  }

  elem.textContent = truncatedContent;
  elem.addEventListener('mouseover', () => {
    elem.textContent = fullContent;
    elem.style.whiteSpace = 'normal';
  });
  elem.addEventListener('mouseout', () => {
    elem.textContent = truncatedContent;
  });
}

function truncate(str, maxWordCount = 80) {
  const words = str.split(' ');
  if (words.length < maxWordCount) {
    return {
      fullContent: str,
      truncatedContent: '',
    };
  }

  const truncatedStr = words.slice(0, maxWordCount).join(' ') + '...';

  return {
    fullContent: str,
    truncatedContent: truncatedStr,
  };
}
