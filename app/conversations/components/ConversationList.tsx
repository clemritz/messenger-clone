'use client'

import { FUllConversationType } from "@/app/types";

interface ConversationListProps {
  initialItems: FUllConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems
}) => {
  return <div>ConversationList</div>;
};

export default ConversationList;
