<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventsController extends Controller
{
    //
    public function show(Event $event)
    {
        return Inertia::render('Event/Show', [
            'event' => $event->only('id', 'title', 'start_date', 'description'),
        ]);

        // Alternatively, you can use the inertia() helper
        return inertia('Event/Show', [
            'event' => $event->only('id', 'title', 'start_date', 'description'),
        ]);

    }
}
