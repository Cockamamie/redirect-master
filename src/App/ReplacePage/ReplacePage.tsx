import RulesPage from 'App/ReplacePage/RulesPage/RulesPage.tsx';
import { getReplaceRules } from 'Data/storageFunctions.ts';
import { useEffect, useState } from 'react';
import ReplaceRule from 'Data/replaceRule.ts';
import { ButtonGroup, IconButton, Pagination, Stack } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const pageSize = 2;

export default function ReplacePage() {
  const [rules, setRules] = useState<ReplaceRule[]>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getReplaceRules()
      .then(result => setRules(result));
  }, []);

  if (!rules) {
    return (
      <>Loading</>
    );
  }

  const startRange = (page - 1) * pageSize;
  const endRange = startRange + pageSize;
  const visibleRules = rules!.slice(startRange, endRange);

  return (
    <Stack justifyContent={'space-between'} height={'100%'} alignItems={'center'} padding={'30px'}>
      <RulesPage rules={visibleRules} />
      <Pagination.Root
        count={rules.length}
        pageSize={pageSize}
        page={page}
        onPageChange={e => setPage(e.page)}
      >
        <ButtonGroup variant="ghost" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <HiChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <HiChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  );
}