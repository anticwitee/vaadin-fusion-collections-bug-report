package com.example.application.data.endpoint;

import java.util.Map;

import com.vaadin.fusion.Endpoint;
import com.vaadin.fusion.Nonnull;

import java.util.List;

@Endpoint
public class DummyEndpoint {
  public static class Dummy {
    public @Nonnull Map<@Nonnull String, @Nonnull List<@Nonnull String>> nestedList;
  }

  public Dummy endpoint(){
    return new Dummy();
  }
}
