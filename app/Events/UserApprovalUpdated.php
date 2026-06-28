<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserApprovalUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

	public int $approved;
	public int $pending;
	public int $total;

    /**
     * Create a new event instance.
     */
    public function __construct(
		int $approved,
		int $pending,
		int $total
	)
    {
        $this->approved = $approved;
		$this->pending = $pending;
		$this->total = $total;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('dashboard-users'),
        ];
    }

	public function broadcastAs(): string
	{
		return 'approval.updated';
	}
}
