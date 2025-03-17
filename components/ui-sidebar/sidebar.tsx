'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';
import Cross1 from '@/components/radix/cross1';
import { Categories } from './categories-collapsible';
import { FlowProvider, useFlowContext } from '@/context/FlowContext';

const Sidebar = () => {
    const recentButtons = [];
    const { AvailableNodes } = useFlowContext();
    const uniqueCategories = [
        ...new Set(AvailableNodes.map((node) => node.category)),
    ];

    return (
        <ResizablePanelGroup direction="horizontal" className="p-4">
            <ResizablePanel className="min-w-fit" defaultSize={1}>
                <Card className="max-h-[calc(100vh-2rem)] flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Nodes</CardTitle>
                        <Cross1 />
                    </CardHeader>

                    <CardContent className="overflow-y-auto flex-1">
                        <div>
                            {uniqueCategories.map((categoryName) => (
                                <Categories
                                    key={categoryName}
                                    categoryName={categoryName}
                                    availableNodes={AvailableNodes}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </ResizablePanel>
            <ResizableHandle className="bg-border-none" />
            <ResizablePanel defaultSize={99} />
        </ResizablePanelGroup>
    );
};

export default () => (
    <FlowProvider>
        <Sidebar />
    </FlowProvider>
);
